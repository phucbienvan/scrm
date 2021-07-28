export default {
  methods: {
    $goBack (e, route) {
      e.preventDefault();
      let prevPath = route;

      if (typeof route === 'object') {
        prevPath = this.$router.resolve(route).href;
      }

      if (this.prevRoute && this.prevRoute.path === prevPath) {
        window.history.back();
      } else {
        this.$router.push(prevPath);
      }

      return false;
    },

    handleFormData (data) {
      const formData = new FormData();
      Object.entries(data).forEach((entry) => {
        const [key, value] = entry;
        formData.append(key, value);
      });

      return formData;
    },
    readUTF8String (bytes) {
      let ix = 0;

      if (bytes.slice(0, 3) === '\xEF\xBB\xBF') {
        ix = 3;
      }

      let string = '';
      for (; ix < bytes.length; ix += 1) {
        const byte1 = bytes[ix].charCodeAt(0);
        if (byte1 < 0x80) {
          string += String.fromCharCode(byte1);
        } else if (byte1 >= 0xc2 && byte1 < 0xe0) {
          ix += 1;
          const byte2 = bytes[ix].charCodeAt(0);
          // eslint-disable-next-line no-bitwise
          string += String.fromCharCode(((byte1 & 0x1f) << 6) + (byte2 & 0x3f));
        } else if (byte1 >= 0xe0 && byte1 < 0xf0) {
          ix += 1;
          const byte2 = bytes[ix].charCodeAt(0);
          ix += 1;
          const byte3 = bytes[ix].charCodeAt(0);
          string += String.fromCharCode(
            // eslint-disable-next-line no-bitwise
            ((byte1 & 0xff) << 12) + ((byte2 & 0x3f) << 6) + (byte3 & 0x3f),
          );
        } else if (byte1 >= 0xf0 && byte1 < 0xf5) {
          ix += 1;
          const byte2 = bytes[ix].charCodeAt(0);
          ix += 1;
          const byte3 = bytes[ix].charCodeAt(0);
          ix += 1;
          const byte4 = bytes[ix].charCodeAt(0);
          // eslint-disable-next-line no-bitwise
          let codepoint = ((byte1 & 0x07) << 18) + ((byte2 & 0x3f) << 12) + ((byte3 & 0x3f) << 6) + (byte4 & 0x3f);
          codepoint -= 0x10000;
          // eslint-disable-next-line no-bitwise
          string += String.fromCharCode((codepoint >> 10) + 0xd800, (codepoint & 0x3ff) + 0xdc00);
        }
      }
      return string;
    },
    handleUrlFormData (data) {
      const formData = new URLSearchParams();
      Object.entries(data).forEach((entry) => {
        const [key, value] = entry;
        formData.append(key, value);
      });

      return formData;
    },

    validateEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
  },
};

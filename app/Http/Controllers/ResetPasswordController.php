<?php

namespace App\Http\Controllers;

use App\Models\PasswordReset;
use App\Models\User;
use App\Notifications\ResetPasswordRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ResetPasswordController extends Controller
{
    public function sendMail(Request $request){
//        dd('123');
        $user = User::where('email', $request->email)->first();
//        dd($user);

        // nếu có email và token thì cập nhật, nếu không có thì tạo mới
        $passwordReset = PasswordReset::updateOrCreate([
            'email' => $user->email,
        ], [
            'token' => Str::random(60),
        ]);
        if ($passwordReset) {
            $user->notify(new ResetPasswordRequest($passwordReset->token));
        }
        return response()->json([
            'message' => 'Chúng tôi đã gửi link liên kết đặt lại mật khẩu qua email của bạn'
        ]);
    }

    public function reset(Request $request, $token){
        $passwordReset = PasswordReset::where('token', $token)->firstOrFail();
        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            return response()->json([
                'message' => 'Mã thông báo không hợp lệ',
            ], 422);
        }
        $user = User::where('email', $passwordReset->email)->firstOrFail();
        $updatePasswordUser = $user->update($request>only('password'));
        $passwordReset->delete();
        return response()->json([
            'success' => $updatePasswordUser,
        ]);
    }
}

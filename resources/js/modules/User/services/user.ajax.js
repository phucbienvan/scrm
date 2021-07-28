import {
  standardGet,
  standardPost
} from 'core/utils/ajax';

// Example
export const PostHelloWorld = ($arg) => standardPost('/api/hello', $arg );
export const fetchUserInfo = () => standardGet('/api/hello');

// Project
export const fetchProjects = () => standardGet('/api/v1/distributor/projects');


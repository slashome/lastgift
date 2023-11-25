import { SetMetadata } from '@nestjs/common';

export const JWT_DURATION = '60s';
export const jwtConstants = {
  // @TODO Change this string with environment value
  secret:
    'DO NOT USE THIS VALUE. INSTEAD, CREATE A COMPLEX SECRET AND KEEP IT SAFE OUTSIDE OF THE SOURCE CODE.',
};
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

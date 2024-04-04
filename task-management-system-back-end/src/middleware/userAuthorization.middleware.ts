import { Request, Response, NextFunction } from 'express';
import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { getAuthToken } from './getAuthToken.middleware';
import { verifyToken } from './verifyToken.util';
import { UserService } from '../service';

@Injectable()
export class Authorization implements NestMiddleware {
  constructor(private readonly userService: UserService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    try {
      const authToken = await getAuthToken(req, res, next);
      const verify = await verifyToken(authToken);

      if (!verify) {
        return next(
          new UnauthorizedException({
            message: 'Unauthorized',
            error: 'Please login',
          }),
        );
      }

      const user = await this.userService.getUser(verify.userId);
      if (!user) {
        return next(
          new UnauthorizedException({
            message: 'Unauthorized',
            error: 'Please login',
          }),
        );
      }

      req.body = user;
      next();
    } catch (error) {
      return next(
        new UnauthorizedException({
          message: 'Unauthorized',
          error: 'Please login',
        }),
      );
    }
  }
}

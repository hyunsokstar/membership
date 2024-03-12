import { Request } from 'express';
import { UsersModel } from 'src/users/entities/user.entity';
export interface RequestWithUser extends Request {
    user: UsersModel;
}

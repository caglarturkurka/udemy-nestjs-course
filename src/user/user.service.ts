import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import {Model} from "mongoose";
import {ResourceService} from "../../libs/services/resource.service";
import {UserModel} from "../../tools/models/user.model";
import {UserCreateDto, UserUpdateDto} from "../../tools/dtos/user.dto";
@Injectable()
export class UserService extends ResourceService<UserModel, UserCreateDto, UserUpdateDto>{
  constructor(@InjectModel('User')  userMongo: Model<any>) {
    super(userMongo)
  }

}

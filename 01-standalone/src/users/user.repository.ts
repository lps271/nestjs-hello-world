import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserRepository {

    findAll(): User[] {
        return [{
            id: 1,
            name: 'Lucas'
        },];
    }
}
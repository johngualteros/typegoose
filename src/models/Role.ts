import { prop, getModelForClass } from "@typegoose/typegoose";


export class Role {

    @prop({ required: true, unique: true })
    name: string;

}

const RoleModel = getModelForClass(Role);

export default RoleModel;
import { prop, getModelForClass, Ref, pre } from '@typegoose/typegoose';
import { Role } from './Role';
import bcrypt from 'bcryptjs';

@pre<User>('save', function(){
    this.firstname = this.firstname.toUpperCase();
    this.password = bcrypt.hashSync(this.password, 10);
})

export class User {
    @prop({required: true})
    firstname: string;
    
    @prop({required: true})
    lastname: string;
        
    @prop({required: true, trim: true})
    email: string;
    
    @prop({required: true, minlength: 6})
    password: string;

    @prop({ ref: () => Role})
    roles: Ref<Role>[];
}

const UserModel = getModelForClass(User);

export default UserModel;
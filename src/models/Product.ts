import { prop, getModelForClass, modelOptions, Ref } from "@typegoose/typegoose";
import { User } from './User';

@modelOptions({
	schemaOptions: {
		timestamps: true,
		_id: false,
	},
})
class Comment {
	@prop()
	text: String;
}

class Product {
	@prop({ required: true, trim: true }) 
	name: string;

	@prop({ type: Number, default: Number(0) })
	price: number;

	@prop({ required: true, lowercase: true, trim: true })
	url: string;

	@prop()
	tags: string[];

	@prop({ type: () => [Comment] })
	comments: Comment[];

    @prop({ ref: () => User })
    owner: Ref<User>;
}

const ProductModel = getModelForClass(Product);

export default ProductModel;

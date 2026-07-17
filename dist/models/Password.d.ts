import mongoose from "mongoose";
declare const Password: mongoose.Model<{
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    account: string;
    password: string;
    strength: string;
    breached: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}, mongoose.Document<unknown, {}, {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    account: string;
    password: string;
    strength: string;
    breached: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & mongoose.HydratedDocumentOverrides<{
    id: string;
}>, unknown, {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    account: string;
    password: string;
    strength: string;
    breached: boolean;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Password;
//# sourceMappingURL=Password.d.ts.map
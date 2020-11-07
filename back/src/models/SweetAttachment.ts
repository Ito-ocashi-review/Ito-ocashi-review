import {Model,ObjectID} from "@tsed/mongoose";

@Model()
export class SweetAttachment {
    @ObjectID("id")
    _id: string;

    filePath: string;
    fileName: string;
    fileFormat: string;
    filesize: Number;

}
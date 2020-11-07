import {Integer} from "@tsed/common"
import {Model,ObjectID} from "@tsed/mongoose";

@Model()
export class SweetAttachment {

    filePath: string;
    fileName: string;
    fileFormat: string;

    @ObjectID("id")
    _id: string;

    @Integer()
    filesize: number
}
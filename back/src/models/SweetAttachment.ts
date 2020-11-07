import {Integer} from "@tsed/common"
import {Model,ObjectID, Ref} from "@tsed/mongoose";
import { Sweet } from './Sweet';

@Model()
export class SweetAttachment {

    @ObjectID("id")
    _id: string
      
    filePath: string;
    fileName: string;
    fileFormat: string;

    @Ref(Sweet)
    sweetId: Ref<Sweet>
  
    @Integer()
    filesize: number
}
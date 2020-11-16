import {AuditModel} from "../../tools/models/audit.model";
import {Model} from "mongoose";

export class ResourceService<T extends any, C extends any, U extends any> {
  // @ts-ignore
  constructor(protected readonly mongoModel: Model<T>) {
  }

  async create(model: C): Promise<T> {
    const audit = new AuditModel();
    audit.active = true;
    audit.createdBy = 'Admin'
    audit.createdDate = new Date();
    audit.lastmodifiedBy = 'Admin';
    audit.lastmodifiedDate = new Date();
    let createModel: T;
    // @ts-ignore
    createModel = new this.mongoModel({...model, ...audit});
    // @ts-ignore
    return await createModel.save();
  }

  async findAll(): Promise<T[]> {
    return await this.mongoModel.find().exec();
  }

  async findOne(id: string): Promise<T> {
    // @ts-ignore
    return await this.mongoModel.findOne({_id: id}).exec();
  }

  async delete(id: string): Promise<T> {
    return await this.mongoModel.findByIdAndRemove({_id: id}).exec();
  }

  async update(id: string, dto: U): Promise<T> {
    // @ts-ignore
    let newModel = await this.mongoModel.findOne({ _id: id }).exec();
    // @ts-ignore
    newModel = {...newModel, ...dto};
    return await this.mongoModel.findByIdAndUpdate(id, newModel, {new: true}).exec();
  }
}

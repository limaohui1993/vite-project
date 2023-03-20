import {ElForm} from "element-plus"
import {FormItemRule} from "element-plus/package/form/src/form.type"

export type  IElForm=InstanceType<typeof ElForm>
export type  IFormRule=Record<string, FormItemRule[]>
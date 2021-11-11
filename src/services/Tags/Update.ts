import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepositories";
import { RequestToCreateTag } from "./Create";

export interface RequestToUpdateTag extends RequestToCreateTag {}

export class Update {
  constructor(private tagRepository = getCustomRepository(TagRepository)) {}

  public async execute(id: string, tagUpdate: RequestToUpdateTag): Promise<void> {

    if (!id) throw new Error('Incorrect query')

    const tag = await this.tagRepository.findOne({ where: {id}})

    if (!tag) throw new Error('Tag not found')

    await this.tagRepository.update(id, tagUpdate)

    return
  }
}
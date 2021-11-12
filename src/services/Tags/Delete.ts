import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepositories";


export class Delete {
  constructor(private tagRepository = getCustomRepository(TagRepository)) {}

  public async execute(id: string): Promise<void> {

    if (!id) throw new Error('Incorrect query')

    const tag = await this.tagRepository.findOne({ where: {id}})

    if (!tag) throw new Error('Tag not found')

    await this.tagRepository.delete(id)

    return
  }
}
import { Injectable } from '@nestjs/common';
import {
  PaginationQueryDto,
  ProjectDto,
  ProjectMemberDto,
  ProjectUpdateDto,
} from '../../dto';
import { ProjectInterface } from '../../interface';
import { PorjectRepository, ProjectMemberRepository } from '../../repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectMemberModel, ProjectModel } from '../../model';

@Injectable()
export class ProjectService implements ProjectInterface {
  constructor(
    @InjectRepository(ProjectModel)
    private readonly porjectRepository: PorjectRepository,

    @InjectRepository(ProjectMemberModel)
    private readonly projectMemberRepository: ProjectMemberRepository,
  ) {}
  async getProjectsByPagination(
    paginationDto: PaginationQueryDto,
  ): Promise<any> {
    const { limit, page } = paginationDto;
    const skip = (page - 1) * limit;
    return await this.porjectRepository.find();
  }

  async createProject(projectDto: ProjectDto): Promise<any> {
    try {
      const project = this.porjectRepository.create(projectDto);
      return await this.porjectRepository.save(project);
    } catch (error) {
      throw error;
    }
  }

  async getProject(id: string): Promise<any> {
    return await this.porjectRepository.findOne({
      where: { id: id },
      relations: ['task.status'],
    });
  }

  async getProjects(): Promise<any> {
    return await this.porjectRepository.find({ relations: ['task.status'] });
  }

  async getProjectByName(project: string): Promise<any> {
    return await this.porjectRepository.findOne({
      where: { name: project },
      relations: ['task.status'],
    });
  }

  async deleteProject(id: string): Promise<any> {
    return await this.porjectRepository.delete(id);
  }

  async updateProject(
    id: string,
    projectUpdateDto: ProjectUpdateDto,
  ): Promise<any> {
    return await this.porjectRepository.update(id, projectUpdateDto);
  }

  async assignUserToProject(projectMemberDto: ProjectMemberDto): Promise<any> {
    const { usersId, projectId } = projectMemberDto;
    const assignedUsersToProject = usersId.map((userId) => {
      const assignUserToProject = this.projectMemberRepository.create({
        projectId: projectId,
        userId: userId,
      });
      return assignUserToProject;
    });
    return this.projectMemberRepository.save(assignedUsersToProject);
  }
}

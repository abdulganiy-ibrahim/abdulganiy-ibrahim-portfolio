import { Modal } from '../ui';
import { Project } from '@/types';
import TechnologyBadge from './TechnologyBadge';
import { LiveBtn, GithubBtn } from './ProjectCardBtn';

type ProjectModalProps = {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className="p-2">
      <div className="flex flex-col max-h-[85vh]">
        {/* Image */}
        <div className="relative shrink-0 rounded-xl overflow-hidden bg-background border border-border/60">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-56 sm:h-72 object-cover"
          />
          {project.status === 'private' && (
            <span className="absolute top-3 right-3 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-medium text-white">
              Private repo
            </span>
          )}
        </div>

        <div className="mt-5 pr-1">
          <h2 className="text-xl font-bold text-primary">
            {project.name}
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {project.desc}
          </p>

          <div className="mt-3 flex flex-wrap items-center gap-2">
            {project.technology.map((tech) => (
              <TechnologyBadge key={tech} name={tech} />
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 mb-5 pt-4 border-t border-border/60 shrink-0 flex items-center justify-between gap-2">
          <LiveBtn LinkUrl={project.LiveUrl} />
          <GithubBtn LinkUrl={project.githubUrl} status={project.status} />
        </div>
      </div>
    </Modal>
  );
}
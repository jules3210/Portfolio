import Badge from './Badge';
import { SKILLS_LIST } from './Data/skills.jsx';

function Skills() {
    return (
        <section id="skills" className="py-15 border-b-2 border-(--line)">
            <div className="text-(--text-muted) text-[13px] mb-5">
                Stack technique
            </div>
            <div className="flex flex-wrap gap-2.5">
                {SKILLS_LIST.map((skill) => (
                    <Badge key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </section>
    );
}

export default Skills;

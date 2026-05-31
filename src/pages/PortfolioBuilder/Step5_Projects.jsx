import { FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Step5_Projects = ({ formData, setFormData, currentProject, setCurrentProject, errors }) => {

    const addTechnology = () => {
        if (currentProject.techInput && !currentProject.technologies.includes(currentProject.techInput)) {
            setCurrentProject({ ...currentProject, technologies: [...currentProject.technologies, currentProject.techInput], techInput: '' });
        }
    };

    const addFeature = () => {
        if (currentProject.featureInput && !currentProject.features.includes(currentProject.featureInput)) {
            setCurrentProject({ ...currentProject, features: [...currentProject.features, currentProject.featureInput], featureInput: '' });
        }
    };

    const addProject = () => {
        if (!currentProject.title || !currentProject.description || !currentProject.liveLink) {
            Swal.fire({ title: 'Missing Information!', text: 'Please fill Title, Description, and Live Link', icon: 'warning', background: '#1a1a2e', color: '#fff' });
            return;
        }
        setFormData({ ...formData, projects: [...formData.projects, { ...currentProject }] });
        setCurrentProject({ title: '', description: '', technologies: [], techInput: '', features: [], featureInput: '', liveLink: '', githubLink: '', imageUrl: '' });
        Swal.fire({ title: 'Project Added!', icon: 'success', timer: 1500, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
    };

    const removeProject = (index) => {
        const updated = formData.projects.filter((_, i) => i !== index);
        setFormData({ ...formData, projects: updated });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Projects (Minimum 3 Required)</h3>
            {errors.projects && <p className="text-red-400 text-center">{errors.projects}</p>}
            <p className="text-gray-400 text-sm">Added: {formData.projects.length}/3 projects</p>

            <div className="p-4 bg-white/5 rounded-lg space-y-4">
                <input type="text" placeholder="Project Title *" value={currentProject.title} onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                <textarea placeholder="Project Description *" value={currentProject.description} onChange={(e) => setCurrentProject({ ...currentProject, description: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" rows="3" />
                <input type="url" placeholder="Live Link *" value={currentProject.liveLink} onChange={(e) => setCurrentProject({ ...currentProject, liveLink: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                <input type="url" placeholder="GitHub Link" value={currentProject.githubLink} onChange={(e) => setCurrentProject({ ...currentProject, githubLink: e.target.value })} className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />

                <div><label className="text-gray-300 text-sm">Technologies</label><div className="flex gap-2 mt-1"><input type="text" value={currentProject.techInput} onChange={(e) => setCurrentProject({ ...currentProject, techInput: e.target.value })} className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" /><button type="button" onClick={addTechnology} className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg">Add</button></div><div className="flex flex-wrap gap-2 mt-2">{currentProject.technologies.map((tech, i) => (<span key={i} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">{tech}<button onClick={() => setCurrentProject({ ...currentProject, technologies: currentProject.technologies.filter(t => t !== tech) })}>×</button></span>))}</div></div>

                <div><label className="text-gray-300 text-sm">Features</label><div className="flex gap-2 mt-1"><input type="text" value={currentProject.featureInput} onChange={(e) => setCurrentProject({ ...currentProject, featureInput: e.target.value })} className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" /><button type="button" onClick={addFeature} className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-lg">Add</button></div><div className="flex flex-wrap gap-2 mt-2">{currentProject.features.map((feature, i) => (<span key={i} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">{feature}<button onClick={() => setCurrentProject({ ...currentProject, features: currentProject.features.filter(f => f !== feature) })}>×</button></span>))}</div></div>

                <button type="button" onClick={addProject} className="w-full px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-semibold flex items-center justify-center gap-2"><FaPlus /> Add Project</button>
            </div>

            <div>
                {formData.projects.map((project, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-lg mb-2">
                        <div className="flex justify-between items-start">
                            <div><h4 className="text-white font-semibold">{project.title}</h4><p className="text-gray-400 text-sm">{project.description?.substring(0, 100)}...</p></div>
                            <button onClick={() => removeProject(idx)} className="text-red-400"><FaTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step5_Projects;
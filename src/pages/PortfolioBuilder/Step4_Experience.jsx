import { FaPlus, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Step4_Experience = ({ formData, setFormData, currentExp, setCurrentExp }) => {

    const addExperience = () => {
        if (!currentExp.title || !currentExp.company || !currentExp.period) {
            Swal.fire({ title: 'Missing Fields!', text: 'Please fill Title, Company, and Period', icon: 'warning', confirmButtonColor: '#3085d6', background: '#1a1a2e', color: '#fff' });
            return;
        }
        setFormData({ ...formData, experiences: [...formData.experiences, currentExp] });
        setCurrentExp({ title: '', company: '', period: '', description: '' });
        Swal.fire({ title: 'Experience Added!', text: `${currentExp.title} at ${currentExp.company} has been added`, icon: 'success', timer: 1500, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
    };

    const removeExperience = (index) => {
        const updated = formData.experiences.filter((_, i) => i !== index);
        setFormData({ ...formData, experiences: updated });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Work Experience (Optional)</h3>
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-white/5 rounded-lg">
                <input type="text" placeholder="Job Title" value={currentExp.title} onChange={(e) => setCurrentExp({ ...currentExp, title: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                <input type="text" placeholder="Company" value={currentExp.company} onChange={(e) => setCurrentExp({ ...currentExp, company: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                <input type="text" placeholder="Period (e.g., 2022-2024)" value={currentExp.period} onChange={(e) => setCurrentExp({ ...currentExp, period: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" />
                <textarea placeholder="Description" value={currentExp.description} onChange={(e) => setCurrentExp({ ...currentExp, description: e.target.value })} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white" rows="2" />
                <button type="button" onClick={addExperience} className="md:col-span-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-semibold flex items-center justify-center gap-2"><FaPlus /> Add Experience</button>
            </div>
            <div>
                {formData.experiences.map((exp, idx) => (
                    <div key={idx} className="p-4 bg-white/5 rounded-lg mb-2 flex justify-between items-center">
                        <div><h4 className="text-white font-semibold">{exp.title}</h4><p className="text-gray-400 text-sm">{exp.company} | {exp.period}</p></div>
                        <button onClick={() => removeExperience(idx)} className="text-red-400"><FaTrash /></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step4_Experience;
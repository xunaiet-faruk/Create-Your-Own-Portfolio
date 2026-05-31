import { FaPlus } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Step3_Skills = ({ formData, setFormData, currentSkill, setCurrentSkill }) => {

    const addSkill = () => {
        if (!currentSkill) {
            Swal.fire({ title: 'Empty Field!', text: 'Please enter a skill first', icon: 'warning', timer: 1500, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
            return;
        }
        if (formData.skills.includes(currentSkill)) {
            Swal.fire({ title: 'Duplicate!', text: 'This skill is already added', icon: 'info', timer: 1500, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
            return;
        }
        setFormData({ ...formData, skills: [...formData.skills, currentSkill] });
        setCurrentSkill('');
        Swal.fire({ title: 'Skill Added!', text: `${currentSkill} has been added`, icon: 'success', timer: 1000, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
    };

    const removeSkill = (skill) => {
        Swal.fire({
            title: 'Remove Skill?', text: `Remove "${skill}"?`, icon: 'question', showCancelButton: true, confirmButtonColor: '#d33', cancelButtonColor: '#3085d6', confirmButtonText: 'Yes', background: '#1a1a2e', color: '#fff'
        }).then((result) => {
            if (result.isConfirmed) {
                setFormData({ ...formData, skills: formData.skills.filter(s => s !== skill) });
                Swal.fire({ title: 'Removed!', icon: 'success', timer: 1000, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
            }
        });
    };

    return (
        <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Skills & Expertise</h3>
            <div>
                <div className="flex gap-2 mb-4">
                    <input type="text" value={currentSkill} onChange={(e) => setCurrentSkill(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && addSkill()} className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" placeholder="e.g., React, JavaScript" />
                    <button type="button" onClick={addSkill} className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold">Add</button>
                </div>
                <div className="flex flex-wrap gap-2">
                    {formData.skills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm flex items-center gap-2">
                            {skill}
                            <button type="button" onClick={() => removeSkill(skill)} className="hover:text-white">×</button>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Step3_Skills;
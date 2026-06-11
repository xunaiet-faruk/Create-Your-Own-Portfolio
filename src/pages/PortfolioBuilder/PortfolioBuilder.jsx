import { motion } from 'framer-motion';
import Useaxios from '../../Hooks/Useaxios';
import Swal from 'sweetalert2';
import Heading from './Heading';
import ProgressSteps from './ProgressSteps';
import Step1_PersonalInfo from './Step1_PersonalInfo';
import Step2_SocialLinks from './Step2_SocialLinks';
import Step3_Skills from './Step3_Skills';
import Step4_Experience from './Step4_Experience';
import Step5_Projects from './Step5_Projects';
import Step6_Preview from './Step6_Preview';
import Step6_TemplateSelector from './Step6_TemplateSelector';
import { useState } from 'react';

const IMGBB_API_KEY = "6bb83104364a756c7ef713ea4d6873a3";
const PortfolioBuilder = () => {
    const axios = Useaxios();
    const [step, setStep] = useState(1);
    const [preview, setPreview] = useState(false);
    const [currentSkill, setCurrentSkill] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [profileImagePreview, setProfileImagePreview] = useState('');
    const [loading, setLoading] = useState(false);
    const [generatedLink, setGeneratedLink] = useState(null);
    const [selectedTemplate, setSelectedTemplate] = useState('modern-dark');

    const [formData, setFormData] = useState({
        fullName: '', title: '', email: '', phone: '', description: '', resumeLink: '', location: '',
        github: '', linkedin: '', facebook: '', twitter: '', website: '',
        skills: [], experiences: [], projects: []
    });

    const [currentExp, setCurrentExp] = useState({ title: '', company: '', period: '', description: '' });
    const [currentProject, setCurrentProject] = useState({
        title: '', description: '', technologies: [], techInput: '', features: [], featureInput: '', liveLink: '', githubLink: '', imageUrl: ''
    });
    const [errors, setErrors] = useState({});

    // ইমেজ সিলেক্ট করার ফাংশন
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setProfileImage(file); // ফাইলটি স্টেট-এ সেভ করে রাখছি পরে আপলোড করার জন্য
            
            // তাৎক্ষণিক ফ্রন্টএন্ড প্রিভিউ এর জন্য FileReader
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfileImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const removeImage = () => {
        setProfileImage(null);
        setProfileImagePreview('');
    };

    const validateStep = () => {
        let newErrors = {};
        if (step === 1) {
            if (!formData.fullName) newErrors.fullName = 'Name is required';
            if (!formData.title) newErrors.title = 'Title is required';
            if (!formData.email) newErrors.email = 'Email is required';
            if (!formData.description) newErrors.description = 'Description is required';
        }
        if (step === 5) {
            if (formData.projects.length < 3) newErrors.projects = 'Minimum 3 projects required';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep()) {
            setStep(step + 1);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handleBack = () => {
        setStep(step - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTemplateNext = () => {
        setStep(step + 1);
        setPreview(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // ফাইনাল সাবমিট ফাংশন
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.projects.length < 3) {
            Swal.fire({ title: 'Minimum Projects Required!', text: 'You need at least 3 projects', icon: 'warning', background: '#1a1a2e', color: '#fff' });
            setStep(5);
            return;
        }

        setLoading(true);
        Swal.fire({ title: 'Creating...', text: 'Please wait, uploading data', icon: 'info', allowOutsideClick: false, showConfirmButton: false, didOpen: () => Swal.showLoading(), background: '#1a1a2e', color: '#fff' });

        try {
            let finalImageUrl = "";

            // ১. যদি ইউজার ইমেজ সিলেক্ট করে থাকে, তবে প্রথমে ImgBB তে আপলোড হবে
            if (profileImage) {
                const imgFormData = new FormData();
                imgFormData.append('image', profileImage);

                // সরাসরি axios বা fetch দিয়ে ImgBB API তে হিট
                const imgbbResponse = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                    method: 'POST',
                    body: imgFormData
                });
                
                const imgbbData = await imgbbResponse.json();
                
                if (imgbbData.success) {
                    finalImageUrl = imgbbData.data.url; // ImgBB থেকে পাওয়া ডাইরেক্ট ইমেজ লিংক
                } else {
                    throw new Error("Image upload to ImgBB failed");
                }
            }

            // ২. জেসন ডাটা তৈরি (যার মধ্যে ইমেজের লাইভ URL-টি থাকবে)
            const jsonData = {
                fullName: formData.fullName,
                title: formData.title,
                email: formData.email,
                phone: formData.phone || '',
                location: formData.location || '',
                description: formData.description,
                profileImage: finalImageUrl, // ডাটাবেজে এখন চমৎকার একটি CDN লিংক স্টোর হবে
                resumeLink: formData.resumeLink || '',
                github: formData.github || '',
                linkedin: formData.linkedin || '',
                facebook: formData.facebook || '',
                twitter: formData.twitter || '',
                website: formData.website || '',
                skills: formData.skills,
                experiences: formData.experiences,
                projects: formData.projects,
                selectedTemplate: selectedTemplate 
            };

            console.log('Sending data:', jsonData);

            // ৩. আপনার ব্যাকএন্ড সার্ভারে ডাটা পাঠানো
            const response = await axios.post('/api/portfolio/create', jsonData);
            console.log('Response:', response.data);

            if (response.data.success) {
                const liveLink = `http://localhost:5173/portfolio/${response.data.portfolioId}`;
                Swal.close();
                Swal.fire({
                    title: 'Success! 🎉',
                    html: `<div><p>Portfolio created!</p><p style="color:#00d4ff">${liveLink}</p></div>`,
                    icon: 'success',
                    confirmButtonText: 'View',
                    showCancelButton: true,
                    cancelButtonText: 'Copy',
                    background: '#1a1a2e',
                    color: '#fff'
                }).then((result) => {
                    if (result.isConfirmed) window.open(liveLink, '_blank');
                    else if (result.dismiss === Swal.DismissReason.cancel) {
                        navigator.clipboard.writeText(liveLink);
                        Swal.fire({ title: 'Copied!', timer: 2000, showConfirmButton: false, background: '#1a1a2e', color: '#fff' });
                    }
                });
                setPreview(false);
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({ title: 'Error!', text: error.message || 'Something went wrong', icon: 'error', background: '#1a1a2e', color: '#fff' });
        } finally {
            setLoading(false);
        }
    };

    const steps = [
        { id: 1, name: 'Personal', icon: '👤' },
        { id: 2, name: 'Social', icon: '🔗' },
        { id: 3, name: 'Skills', icon: '💻' },
        { id: 4, name: 'Experience', icon: '💼' },
        { id: 5, name: 'Projects', icon: '📁' },
        { id: 6, name: 'Template', icon: '🎨' }
    ];
return (
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="relative max-w-6xl mx-auto">
                <Heading />
                <ProgressSteps step={step} setStep={setStep} steps={steps} />
                <motion.div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/10">
                    {!preview ? (
                        <form>
                            {step === 1 && <Step1_PersonalInfo formData={formData} setFormData={setFormData} errors={errors} profileImagePreview={profileImagePreview} handleImageUpload={handleImageUpload} removeImage={removeImage} />}
                            {step === 2 && <Step2_SocialLinks formData={formData} setFormData={setFormData} />}
                            {step === 3 && <Step3_Skills formData={formData} setFormData={setFormData} currentSkill={currentSkill} setCurrentSkill={setCurrentSkill} />}
                            {step === 4 && <Step4_Experience formData={formData} setFormData={setFormData} currentExp={currentExp} setCurrentExp={setCurrentExp} />}
                            {step === 5 && <Step5_Projects formData={formData} setFormData={setFormData} currentProject={currentProject} setCurrentProject={setCurrentProject} errors={errors} />}
                            {step === 6 && <Step6_TemplateSelector selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} onNext={handleTemplateNext} onBack={handleBack} />}

                            <div className="flex justify-between mt-8 pt-6 border-t border-white/10">
                                {step > 1 && step < 6 && (
                                    <button type="button" onClick={handleBack} className="px-6 py-2 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20">
                                        ← Previous
                                    </button>
                                )}
                                {step < 5 && step !== 6 && (
                                    <button type="button" onClick={handleNext} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 ml-auto">
                                        Next →
                                    </button>
                                )}
                                {step === 5 && (
                                    <button type="button" onClick={() => setStep(6)} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold ml-auto">
                                        Choose Template →
                                    </button>
                                )}
                            </div>
                        </form>
                    ) : (
                        /* 🆕 এখানে selectedTemplate পাস করা হয়েছে এবং setPreview এর সাথে setStep(6) হ্যান্ডেল করা হয়েছে */
                        <Step6_Preview 
                            formData={formData} 
                            profileImagePreview={profileImagePreview} 
                            selectedTemplate={selectedTemplate} 
                            setPreview={(val) => {
                                setPreview(val);
                                if (!val) setStep(6); // প্রিভিউ বন্ধ করলে যাতে আবার টেমপ্লেট সিলেক্টরে ফিরে যায়
                            }} 
                            handleSubmit={handleSubmit} 
                            loading={loading} 
                        />
                    )}
                </motion.div>
            </div>
        </section>
    );

};

export default PortfolioBuilder;
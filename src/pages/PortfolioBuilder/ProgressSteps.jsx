const ProgressSteps = ({ step, setStep, steps }) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {steps.map((s) => (
                <button
                    key={s.id}
                    onClick={() => setStep(s.id)}
                    className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${step === s.id
                            ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                        }`}
                >
                    <span>{s.icon}</span>
                    <span className="hidden sm:inline">{s.name}</span>
                </button>
            ))}
        </div>
    );
};

export default ProgressSteps;
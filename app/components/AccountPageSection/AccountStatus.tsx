import React from 'react';
import { BiCheckCircle } from 'react-icons/bi';
import { TbCircleDashedCheck } from 'react-icons/tb';
import Documentation from './Documentation';

interface stepsData {
    label: string;
    completed: boolean;
}

const steps: stepsData[] = [
    { label: 'Submitted', completed: true },
    { label: 'Review', completed: true },
    { label: 'Quote', completed: true },
    { label: 'Bind', completed: true },
    { label: 'Issue', completed: true },
    { label: 'Renew', completed: false },
];

const AccountStatus = () => {
  return (
    <div className="w-[90%] md:w-[80%] text-white mx-auto flex flex-col xl:flex-row items-center gap-5 justify-between">
        <div className='w-full xl:w-[55%]'>

            <h2 className="text-white text-2xl sm:text-3xl xl:text-2xl 2xl:text-3xl font-medium mb-4 mt-6">Account Status</h2>

            <div className="bg-[#1e2f58] transition-all duration-300 hover:border-blue-500 flex items-center justify-center xl:justify-start border border-[#3e4148] p-3 sm:p-6 h-56 xl:h-32 rounded-3xl">
                <div className="flex flex-wrap gap-3 sm:gap-6 lg:gap-2 2xl:gap-0 items-center">
                {steps.map((step, index) => (
                    <div key={step.label} className="flex">
                        <div className="relative flex flex-col gap-2 items-center">
                            {step.completed ? (
                            <BiCheckCircle className="text-green-400 w-7 h-7" />
                            ) : (
                            <TbCircleDashedCheck className="text-gray-400 w-7 h-7" />
                            )}
                            <span className="text-lg left-1 text-center w-max">{step.label}</span>
                        </div>
                        {index < steps.length - 1 && (
                        
                            <span className="text-green-400 font-extralight hidden sm:inline h-fit">------------</span>
                        
                        )}

                    </div>
                ))}
                </div>
            </div>

        </div>

            <Documentation />

    </div>
  );
};

export default AccountStatus;

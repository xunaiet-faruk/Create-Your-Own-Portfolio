import { RoleBasedContent } from './RoleBasedContent';

/**
 * ইউজার টাইপের উপর ভিত্তি করে কাস্টমাইজড কন্টেন্ট প্রদান করে
 * @param {string} userType - ইউজার টাইপ (developer, designer, marketer, etc.)
 * @returns {object} RoleBasedContent থেকে নির্দিষ্ট টাইপের কন্টেন্ট
 */
export const GetRoleContent = (userType) => {
    return RoleBasedContent[userType] || RoleBasedContent.developer;
};

/**
 * ইউজার ডাটা থেকে সম্পূর্ণ কন্টেন্ট অবজেক্ট তৈরি করে
 * @param {object} data - ইউজার ডাটা (fullName, title, description, userType, etc.)
 * @returns {object} ব্যানার এবং অন্যান্য কম্পোনেন্টে ব্যবহারের জন্য সম্পূর্ণ কন্টেন্ট
 */
export const GetCompleteBannerContent = (data) => {
    const userType = data?.userType || 'developer';
    const roleContent = RoleBasedContent[userType] || RoleBasedContent.developer;
    
    return {
        // রোল-বেসড কন্টেন্ট
        greeting: roleContent.greeting,
        tagline: roleContent.tagline,
        bio: roleContent.bio,
        focusAreas: roleContent.focusAreas,
        quote: roleContent.quote,
        quoteAuthor: roleContent.quoteAuthor,
        stats: roleContent.stats,
        icon: roleContent.icon,
        buttonText: roleContent.buttonText,
        
        // ইউজার কাস্টম কন্টেন্ট (যদি থাকে তবে অগ্রাধিকার দেয়)
        fullName: data?.fullName || 'John Doe',
        title: data?.title || 'Professional',
        description: data?.description || roleContent.bio,
        profileImage: data?.profileImage || null,
        resumeLink: data?.resumeLink || null,
        
        // সোশ্যাল লিংক
        github: data?.github || null,
        linkedin: data?.linkedin || null,
        facebook: data?.facebook || null,
        twitter: data?.twitter || null,
        website: data?.website || null,
        
        // অতিরিক্ত তথ্য
        skills: data?.skills || [],
        location: data?.location || null,
        email: data?.email || null,
    };
};

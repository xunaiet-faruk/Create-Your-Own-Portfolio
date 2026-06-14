
export const DetectUserType = (data) => {
    const skills = data?.skills || [];
    const title = data?.title || '';
    const description = data?.description || '';
    
    // কীওয়ার্ড ভিত্তিক ডিটেকশন
    const keywords = {
        developer: ['react', 'node', 'javascript', 'python', 'coding', 'programming', 'developer', 'engineer', 'full-stack', 'frontend', 'backend'],
        designer: ['photoshop', 'illustrator', 'figma', 'design', 'ui/ux', 'graphic', 'creative', 'art', 'illustration', 'branding', 'visual'],
        marketer: ['seo', 'google ads', 'facebook ads', 'marketing', 'analytics', 'campaign', 'social media', 'digital marketing', 'brand strategy'],
        contentCreator: ['youtube', 'video', 'content', 'writing', 'blog', 'storytelling', 'vlog', 'podcast', 'script', 'editing'],
        photographer: ['camera', 'photography', 'photo', 'lightroom', 'capture', 'lens', 'portrait', 'wedding'],
        writer: ['writing', 'blog', 'article', 'copywriting', 'content writing', 'author', 'story', 'poem']
    };
    
    let scores = {
        developer: 0,
        designer: 0,
        marketer: 0,
        contentCreator: 0,
        photographer: 0,
        writer: 0
    };
    
    // টাইটেল চেক
    Object.keys(keywords).forEach(role => {
        keywords[role].forEach(keyword => {
            if (title.toLowerCase().includes(keyword)) scores[role] += 10;
            if (description.toLowerCase().includes(keyword)) scores[role] += 5;
            skills.forEach(skill => {
                if (skill.toLowerCase().includes(keyword)) scores[role] += 8;
            });
        });
    });
    
    // সর্বোচ্চ স্কোর যুক্ত রোল নির্বাচন
    let userType = 'designer'; // ডিফল্ট
    let maxScore = 0;
    Object.keys(scores).forEach(role => {
        if (scores[role] > maxScore) {
            maxScore = scores[role];
            userType = role;
        }
    });
    
    return userType;
};
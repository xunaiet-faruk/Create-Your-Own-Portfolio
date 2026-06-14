# 🎨 Role-Based Portfolio Content System

## সংক্ষিপ্ত বিবরণ
আপনার পোর্টফোলিও সিস্টেম এখন বিভিন্ন পেশার জন্য স্বয়ংক্রিয় কন্টেন্ট কাস্টমাইজেশন সমর্থন করে।

## ✅ সম্পূর্ণ ফ্লো

### 1️⃣ ব্যবহারকারী ফর্ম পূরণ করে (Step 1: Personal Info)
```
নাম: John Doe
পেশা নির্বাচন: গ্রাফিক ডিজাইনার
দক্ষতা: Photoshop, Figma, Illustrator
বর্ণনা: আমি ডিজাইন করি...
```

### 2️⃣ সিস্টেম স্বয়ংক্রিয়ভাবে পেশা ডিটেক্ট করে
- ড্রপডাউন থেকে সরাসরি নির্বাচন, অথবা
- দক্ষতা/বর্ণনা থেকে স্বয়ংক্রিয় ডিটেকশন (যদি ড্রপডাউন খালি থাকে)

### 3️⃣ পেশা অনুযায়ী কন্টেন্ট প্রদর্শিত হয়

**উদাহরণ:**

#### 🎨 গ্রাফিক ডিজাইনার
- ব্যাজ: "🎨 Design. Inspire. Transform."
- বায়ো: "I'm a creative designer who brings ideas to life..."
- বাটন: "View Portfolio"
- ফোকাস এরিয়া: ["Brand Identity", "UI/UX Design", "Illustration", "Motion Graphics"]

#### 💻 ডেভেলপার
- ব্যাজ: "💻 Code. Create. Innovate."
- বায়ো: "I'm a passionate developer who loves solving complex problems..."
- বাটন: "View My Work"
- ফোকাস এরিয়া: ["Web Development", "Mobile Apps", "API Design", "Database Management"]

#### 📊 ডিজিটাল মার্কেটার
- ব্যাজ: "📊 Grow. Engage. Convert."
- বায়ো: "I help brands grow through strategic digital marketing..."
- বাটন: "View Results"

---

## 📁 সম্পাদিত ফাইলসমূহ

### 1. `src/pages/PortfolioBuilder/Step1_PersonalInfo.jsx`
**পরিবর্তন:**
- পেশা নির্বাচন ড্রপডাউন যোগ করা হয়েছে
- ৬টি পেশা: Developer, Designer, Marketer, Content Creator, Photographer, Writer

### 2. `src/pages/PortfolioBuilder/PortfolioBuilder.jsx`
**পরিবর্তন:**
- `formData` তে `userType` ফিল্ড যোগ করা
- Step 1 → Step 2 এ যাওয়ার সময় স্বয়ংক্রিয় ডিটেকশন
- `DetectUserType` ইমপোর্ট করা
- JSON ডেটায় `userType` যোগ করা (সাবমিটের সময়)

### 3. `src/component/Utils/GetRoleContent.js` (নতুন)
**উদ্দেশ্য:**
- Helper functions ব্যবহারকারীদের জন্য RoleBasedContent অ্যাক্সেস করার জন্য
- `GetRoleContent(userType)` - নির্দিষ্ট পেশার কন্টেন্ট প্রদান করে
- `GetCompleteBannerContent(data)` - সম্পূর্ণ ব্যানার কন্টেন্ট অবজেক্ট তৈরি করে

### 4. `src/pages/ComponentDesign/Moderdark/ModernDarkBanner.jsx`
**পরিবর্তন:**
- `GetCompleteBannerContent` ইমপোর্ট করা
- ব্যাজ টেক্সট: `roleContent.greeting` থেকে আসে
- বায়ো: `roleContent.bio` বা ইউজার `description` ব্যবহার করে
- বাটন টেক্সট: `roleContent.buttonText` থেকে আসে

### 5. `src/pages/ComponentDesign/CleanWhite/ClearwhiteBanner.jsx`
**পরিবর্তন:**
- `GetCompleteBannerContent` ইমপোর্ট করা
- ব্যাজ টেক্সট: `content.greeting` ব্যবহার করে
- বায়ো: `content.bio` ব্যবহার করে

---

## 🚀 কীভাবে অন্যান্য কম্পোনেন্ট আপডেট করব

### সাধারণ প্যাটার্ন

#### 1. Import যোগ করুন
```javascript
import { GetCompleteBannerContent } from '../../../component/Utils/GetRoleContent';
// অথবা
import { RoleBasedContent } from '../../../component/Utils/RoleBasedContent';
```

#### 2. কম্পোনেন্টের মধ্যে কন্টেন্ট সংগ্রহ করুন
```javascript
const content = GetCompleteBannerContent(data);
// অথবা
const roleContent = RoleBasedContent[data?.userType || 'developer'];
```

#### 3. স্টেটিক টেক্সট প্রতিস্থাপন করুন
```javascript
// পূর্বে:
<h2>{data?.title || 'Full Stack Web Developer'}</h2>

// পরে:
<h2>{content.bio}</h2>
```

---

## 📝 RoleBasedContent কাঠামো

প্রতিটি পেশার জন্য নিম্নলিখিত প্রপার্টি উপলব্ধ:

```javascript
{
  greeting: "💻 Code. Create. Innovate.",        // ব্যাজ/ট্যাগলাইন
  tagline: "Building digital solutions...",       // সংক্ষিপ্ত বর্ণনা
  bio: "I'm a passionate developer...",           // সম্পূর্ণ বায়ো
  focusAreas: ["Web Dev", "APIs", ...],          // ফোকাস এরিয়া
  quote: "First, solve the problem...",          // অনুপ্রেরণাদায়ক উদ্ধৃতি
  quoteAuthor: "John Johnson",                    // লেখক নাম
  stats: [                                        // পরিসংখ্যান
    { number: "50+", label: "Projects", icon: "🚀" },
    { number: "30+", label: "Clients", icon: "😊" },
    { number: "4+", label: "Years", icon: "⏱️" }
  ],
  icon: "💻",                                     // পেশার আইকন
  buttonText: "View My Work"                      // সিটিএ বাটন টেক্সট
}
```

---

## 🔄 ডেটা ফ্লো

```
User Input (Step 1)
    ↓
Step 1: Personal Info (নাম, টাইটেল, দক্ষতা)
    ↓
Auto-Detect userType (যদি ম্যানুয়ালি নির্বাচিত না হয়)
    ↓
formData.userType সংরক্ষিত হয়
    ↓
Portfolio Builder সাবমিট → API তে পাঠানো
    ↓
Database এ সংরক্ষিত (userType সহ)
    ↓
Portfolio View প্রদর্শন করার সময়:
    ↓
RoleBasedContent[userType] থেকে কন্টেন্ট লোড করা
    ↓
প্রতিটি কম্পোনেন্ট সঠিক কন্টেন্ট প্রদর্শন করে ✅
```

---

## 🎯 এখনও আপডেট করার অপেক্ষায় থাকা কম্পোনেন্ট

এই কম্পোনেন্টগুলি একই প্যাটার্ন অনুসরণ করে আপডেট করা যায়:

### ব্যানার কম্পোনেন্ট:
- [ ] `AnimatedBanner.jsx`
- [ ] `AnimatedAbout.jsx`
- [ ] `AnimatedNavbar.jsx`

### CleanWhite থিম:
- [ ] `ClearWhiteAbout.jsx`
- [ ] `ClearWhiteSkills.jsx`
- [ ] `ClearWhiteExperiance.jsx` (অভিজ্ঞতা)
- [ ] `ClearWhiteContact.jsx`
- [ ] `ClearWhiteFooter.jsx`
- [ ] `CleanWhiteNav.jsx`

### ModernDark থিম:
- [ ] `ModernDarkAbout.jsx`
- [ ] `ModernDarkSkills.jsx`
- [ ] `ModernDarkExperience.jsx`
- [ ] `ModernDarkProjects.jsx`
- [ ] `ModernDarkFooter.jsx`
- [ ] `ModernDarkContact.jsx`
- [ ] `ModernDarkNavbar.jsx`

---

## ✨ সুবিধাসমূহ

✅ **একাধিক পেশা সমর্থন** - ৬টি বিভিন্ন পেশার জন্য অনন্য কন্টেন্ট  
✅ **স্বয়ংক্রিয় ডিটেকশন** - দক্ষতা/বর্ণনা থেকে পেশা চেনা  
✅ **মডুলার ডিজাইন** - সহজে নতুন পেশা যোগ করা যায়  
✅ **DRY নীতি** - একটি জায়গায় কন্টেন্ট, সব জায়গায় ব্যবহার  
✅ **সামঞ্জস্যপূর্ণ ব্র্যান্ডিং** - প্রতিটি পেশার জন্য অনন্য ভয়েস/টোন  

---

## 🧪 পরীক্ষা করুন

1. পোর্টফোলিও বিল্ডারে যান
2. Step 1: Personal Info পূরণ করুন
   - নাম: আপনার নাম
   - পেশা: কোনো একটি পেশা নির্বাচন করুন
   - দক্ষতা: সেই পেশার সাথে সম্পর্কিত দক্ষতা যোগ করুন
3. Next ক্লিক করুন → userType স্বয়ংক্রিয়ভাবে সেট হবে
4. ফর্ম সাবমিট করুন
5. পোর্টফোলিও প্রদর্শিত হয় → পেশা অনুযায়ী কন্টেন্ট দেখা যাবে

---

## 📚 পেশা ডিটেকশন কীওয়ার্ড

`src/component/Utils/DetectUserType.js` এ দেখুন:

```javascript
const keywords = {
    developer: ['react', 'node', 'javascript', 'python', ...],
    designer: ['photoshop', 'illustrator', 'figma', 'ui/ux', ...],
    marketer: ['seo', 'google ads', 'marketing', ...],
    contentCreator: ['youtube', 'video', 'content', ...],
    photographer: ['camera', 'photography', 'lightroom', ...],
    writer: ['writing', 'blog', 'article', ...]
};
```

নতুন কীওয়ার্ড যোগ করতে এই ফাইল সম্পাদনা করুন।

---

**Happy Building! 🚀**

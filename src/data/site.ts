// Single source of truth for all verified institute information.
// Edit here to update the whole website.
export const SITE = {
  name: 'D.T.A.',
  fullName: 'Delhi Teaching Academy',
  tagline: 'Learn Today, Lead Tomorrow', // printed on the official logo
  director: 'Mrs. Vandana Pandey',
  address: 'B-44, Amar Vihar, Karawal Nagar, Delhi – 110094',
  phonePrimary: '+91 7011194901',
  phonePrimaryTel: '+917011194901',
  phoneSecondary: '+91 9716230714',
  phoneSecondaryTel: '+919716230714',
  whatsappNumber: '917011194901', // international format, no "+"
  email: 'dtadelhiteachingacadmy6316@gmail.com',
  // TODO: confirm with the institute whether the exam is "DSSSB" (Delhi Subordinate
  // Services Selection Board). Change this one value once confirmed.
  dsssbLabel: 'DSSB / DSSSB',
}

export const waLink = (text?: string) =>
  `https://wa.me/${SITE.whatsappNumber}${text ? `?text=${encodeURIComponent(text)}` : ''}`

export const MAPS_LINK =
  'https://www.google.com/maps?q=B-44%2C+Amar+Vihar%2C+Karawal+Nagar%2C+Delhi+110094'
export const MAPS_EMBED_LINK = `${MAPS_LINK}&output=embed`

export const DEMO_MSG =
  'Hello D.T.A. — Delhi Teaching Academy, I would like to book a free demo class. Please share the details.'

export const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#faculty' },
  { label: 'Why D.T.A.', href: '#why' },
  { label: 'Admission', href: '#admission' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const COURSES = [
  { id: 'school', icon: 'book', name: 'School Education', desc: 'Guidance for all classes, all streams and all subjects, taught in small offline batches.', tag: 'All classes · All streams' },
  { id: 'neet', icon: 'cell', name: 'NEET Preparation', desc: 'Focused preparation for the medical entrance examination, supported by regular tests and mock tests.', tag: 'Medical entrance' },
  { id: 'ssc', icon: 'pen', name: 'SSC Preparation', desc: 'Structured preparation for Staff Selection Commission examinations with test practice and doubt support.', tag: 'Government exams' },
  { id: 'dsssb', icon: 'building', name: `${SITE.dsssbLabel} Preparation`, desc: 'Preparation for Delhi government recruitment examinations, with study material and regular practice.', tag: 'Delhi recruitment' },
  { id: 'rrb', icon: 'train', name: 'RRB Preparation', desc: 'Preparation for Railway Recruitment Board examinations through disciplined classroom teaching and mock tests.', tag: 'Railway exams' },
]

export const HIGHLIGHTS = [
  { icon: 'book', title: 'All Classes & Streams', text: 'School education across every class, stream and subject.' },
  { icon: 'cell', title: 'NEET Preparation', text: 'Dedicated coaching for medical entrance aspirants.' },
  { icon: 'pen', title: 'SSC & RRB Preparation', text: 'Competitive exam batches with regular practice.' },
  { icon: 'cap', title: 'Experienced Faculty', text: 'Postgraduate teachers with classroom experience.' },
  { icon: 'check', title: 'Regular Tests', text: 'Tests and mock tests to track steady progress.' },
  { icon: 'help', title: 'Personalised Doubt Support', text: 'Questions are solved, not postponed.' },
  { icon: 'flask', title: 'Practical Science Learning', text: 'Science experiments that make concepts concrete.' },
  { icon: 'snow', title: 'AC Classrooms', text: 'Comfortable, air-conditioned study rooms.' },
]

export const FACULTY = [
  { name: 'Aditya Pandey Sir', role: 'Science Faculty', qualification: 'Postgraduate, Master’s in Economics', experience: '3 Years Teaching Experience', subject: 'Science', img: 'aditya', pos: '50% 62%', alt: 'Portrait of Aditya Pandey Sir, Science Faculty at D.T.A.' },
  { name: 'Adarsh Pandey Sir', role: 'Mathematics Faculty', qualification: 'Postgraduate, MBA', experience: '7 Years Teaching Experience', subject: 'Mathematics', img: 'adarsh', pos: '50% 50%', alt: 'Portrait of Adarsh Pandey Sir, Mathematics Faculty at D.T.A.' },
]

export const WHY = [
  { icon: 'trophy', title: 'Healthy academic competition', text: 'Students grow by learning alongside motivated peers.' },
  { icon: 'users', title: 'Small batches of about 30', text: 'Enough students for healthy competition, few enough for personal attention.' },
  { icon: 'help', title: 'Doubt-solving support', text: 'Dedicated support so questions never pile up.' },
  { icon: 'check', title: 'Tests and mock tests', text: 'Regular practice that shows where to improve.' },
  { icon: 'doc', title: 'Study material', text: 'Material provided to support classroom learning.' },
  { icon: 'flask', title: 'Practical science experiments', text: 'Concepts are shown, not only explained.' },
  { icon: 'snow', title: 'AC classrooms', text: 'A comfortable room for focused study.' },
  { icon: 'heart', title: 'Moral ethics & cognitive growth', text: 'Character and thinking skills are part of the lesson, not an extra.' },
]

export const STEPS = [
  { title: 'Explore Courses', text: 'Look through school education and competitive exam programmes to find what fits the student. Fees and duration depend on the selected course or package.', cta: { label: 'View courses', href: '#courses' } },
  { title: 'Contact the Academy', text: 'Call, message on WhatsApp, email or send the enquiry form. Tell us the class or exam you are interested in.', cta: { label: 'Open enquiry form', href: '#contact' } },
  { title: 'Attend a Free Demo Class', text: 'Demo classes are available. Sit in a class, meet the faculty and see how teaching works before deciding.', cta: { label: 'Book a demo on WhatsApp', href: 'demo' } },
  { title: 'Discuss Course Details & Admission', text: 'Talk through the course, fees, duration and the next batch. New batches begin on the 3rd of every month.', cta: { label: 'Call the academy', href: 'tel' } },
]

export const FAQ = [
  { q: 'Which classes does D.T.A. teach?', a: 'D.T.A. teaches all classes, all streams and all subjects at school level.' },
  { q: 'Which competitive examinations are covered?', a: `Preparation is offered for NEET, SSC, ${SITE.dsssbLabel} and RRB examinations.` },
  { q: 'Are classes online or offline?', a: 'Classes are conducted offline at the academy in Karawal Nagar, Delhi.' },
  { q: 'Are demo classes available?', a: 'Yes. Demo classes are available. Contact the academy on WhatsApp or phone to arrange one.' },
  { q: 'When do new batches begin?', a: 'New batches begin on the 3rd of every month.' },
  { q: 'What is the course fee?', a: 'Fees depend on the selected course or package. Please contact the academy to discuss the details for your course.' },
  { q: 'What is the batch size?', a: 'Each batch has approximately 30 students.' },
  { q: 'Is study material provided?', a: 'Yes, study material is provided.' },
]

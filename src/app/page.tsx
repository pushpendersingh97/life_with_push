export default function Home() {
  const projectList: Array<string> = [
    'Create a Counter Component ✅',
    'Implement a Toggle Switch ✅',
    'Build a To-Do List ✅',
    'Build a stopwatch ✅',
    'Fetch Data from an API',
    'Create a Search Bar',
    'Build a Dropdown Menu',
    'Implement a Tabs Component',
    'Create a Modal Component',
    'Build a Carousel Component',
    'Implement a Star Rating Component',
    'Create a Real-Time Search Filter',
    'Build a Multi-Step Form',
    'Implement a Virtualized List',
    'Create a Reusable Form Component with Validation',
    'Implement a Dynamic Form with Field Arrays',
    'Implement a Context API for Global State',
    'Create a Custom Hook',
    'Build a Todo List with Drag-and-Drop',
    'Create a Countdown Timer',
    'Implement Formik with Yup Validation Conclusion',
    'Stepper Component',
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Projects to create</h1>
      <ul>
        {projectList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

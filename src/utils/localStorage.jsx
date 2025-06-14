export const EMPLOYEE_KEY = "employees";
export const ADMIN_KEY = "admin";

export const employees = [
  {
    id: "emp-101",
    name: "Mr. Muhammad Afzal Kasi",
    email: "demoafzal@gmail.com",
    password: "123",
    tasks: [
      {
        newTask: true,
        inProgress: true,
        completed: false,
        overdue: false,
        taskDescription: "Implement user authentication",
        taskDate: "2025-06-15",
        taskCategory: "Backend",
      },
      {
        newTask: false,
        inProgress: true,
        completed: false,
        overdue: false,
        taskDescription: "Refactor database schema",
        taskDate: "2025-06-12",
        taskCategory: "Database",
      },
      {
        newTask: false,
        inProgress: false,
        completed: true,
        overdue: true,
        taskDescription: "Setup CI/CD pipeline",
        taskDate: "2025-06-08",
        taskCategory: "DevOps",
      }
    ],
  },
  {
    id: "emp-102",
    name: "Miss Hagar El Sayed",
    email: "demohagar@gmail.com",
    password: "123",
    tasks: [
      {
        newTask: true,
        inProgress: false,
        completed: false,
        overdue: true,
        taskDescription: "Design dashboard UI",
        taskDate: "2025-06-05",
        taskCategory: "Frontend",
      },
      {
        newTask: true,
        inProgress: true,
        completed: false,
        overdue: false,
        taskDescription: "Create component library",
        taskDate: "2025-06-14",
        taskCategory: "UI/UX",
      },
      {
        newTask: true,
        inProgress: false,
        completed: false,
        overdue: false,
        taskDescription: "Optimize mobile layout",
        taskDate: "2025-06-16",
        taskCategory: "Responsive Design",
      }
    ],
  },
  {
    id: "emp-103",
    name: "Mr. Mike Johnson",
    email: "demomike@gmail.com",
    password: "123",
    tasks: [
      {
        newTask: false,
        inProgress: false,
        completed: true,
        overdue: false,
        taskDescription: "Write API documentation",
        taskDate: "2025-06-10",
        taskCategory: "Documentation",
      },
      {
        newTask: true,
        inProgress: false,
        completed: false,
        overdue: false,
        taskDescription: "Conduct security audit",
        taskDate: "2025-06-18",
        taskCategory: "Security",
      },
      {
        newTask: false,
        inProgress: true,
        completed: false,
        overdue: false,
        taskDescription: "Fix payment gateway issues",
        taskDate: "2025-06-13",
        taskCategory: "Integration",
      }
    ],
  },
  {
    id: "emp-104",
    name: "Miss Sarah Lee",
    email: "demosarah@gmail.com",
    password: "123",
    tasks: [
      {
        newTask: false,
        inProgress: false,
        completed: false,
        overdue: true,
        taskDescription: "Prepare quarterly report",
        taskDate: "2025-06-03",
        taskCategory: "Reporting",
      },
      {
        newTask: false,
        inProgress: false,
        completed: true,
        overdue: false,
        taskDescription: "Organize team building",
        taskDate: "2025-06-09",
        taskCategory: "HR",
      },
      {
        newTask: true,
        inProgress: false,
        completed: false,
        overdue: false,
        taskDescription: "Schedule client meetings",
        taskDate: "2025-06-17",
        taskCategory: "Coordination",
      }
    ],
  },
  {
    id: "emp-105",
    name: "Mr. David Clark",
    email: "demodavid@gmail.com",
    password: "123",
    tasks: [
      {
        newTask: false,
        inProgress: true,
        completed: false,
        overdue: false,
        taskDescription: "Optimize database queries",
        taskDate: "2025-06-11",
        taskCategory: "Performance",
      },
      {
        newTask: false,
        inProgress: false,
        completed: true,
        overdue: false,
        taskDescription: "Migrate to new server",
        taskDate: "2025-06-07",
        taskCategory: "Infrastructure",
      },
      {
        newTask: true,
        inProgress: false,
        completed: false,
        overdue: false,
        taskDescription: "Implement caching strategy",
        taskDate: "2025-06-19",
        taskCategory: "Optimization",
      }
    ],
  }
];

export const admin = [
  {
    id: "admin-001",
    name: "Waseem Ahmed",
    email: "admin@gmail.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem(EMPLOYEE_KEY, JSON.stringify(employees));
  localStorage.setItem(ADMIN_KEY, JSON.stringify(admin));
};

export const getFromStorage = () => {
  const employees = JSON.parse(localStorage.getItem(EMPLOYEE_KEY)) || [];
  const admin = JSON.parse(localStorage.getItem(ADMIN_KEY)) || [];
  return { employees, admin };
};

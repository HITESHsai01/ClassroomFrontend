import {Subject} from "../types"
export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    name: 'Intro to Computer Science',
    department: 'CS',
    description: 'Foundational programming concepts, data structures, and problem solving.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: 'Linear Algebra',
    department: 'Math',
    description: 'Vectors, matrices, and linear systems with applications across engineering.',
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: 'Modern Literature',
    department: 'English',
    description: 'Survey of 20th century fiction, poetry, and critical analysis techniques.',
    createdAt: new Date().toISOString(),
  }
]

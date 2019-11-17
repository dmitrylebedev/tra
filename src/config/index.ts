import { DefaultTheme } from 'styled-components'
import {
  ANY,
  AssemblyStatus,
  DRAFT,
  IN_REVIEW,
  REVIEW_FINISHED,
  ReviewStatus,
  SOLVED,
  SIMULATION_NEGATIVE,
  SIMULATION_POSITIVE,
  SIMULATION_REQUESTED
} from '../store/modules/types'

export const theme: DefaultTheme = {
  fontSizes: {
    '0': 0,
    '11': 11,
    '12': 12,
    '13': 13,
    '14': 14,
    '16': 16,
    '18': 18,
    '24': 24
  },
  fontFamily: {
    main: 'LabGrotesque',
    title: 'Roobert'
  },
  colors: {
    black: {
      0: '#000'
    },
    red: {
      100: '#E91630'
    },
    blue: {
      100: '#2B7CEE'
    },
    green: {
      100: '#34C86E'
    },
    yellow: {
      100: '#FFC800'
    },
    gray: {
      50: '#808080',
      100: '#7F7F7F',
      200: '#7F8487',
      250: '#98989D',
      300: '#AFB3B6',
      400: '#BDC0C1',
      500: '#D6DADB',
      600: '#D9D9D9',
      700: '#E1E5E6',
      800: '#F4F5F6',
    },
    white: "#fff"
  },
  grid: {
    gutter: [15, null, 30],
    container: {
      maxWidth: 1424,
      padding: [15, null, 30]
    }
  },
  lineHeights: {
    14: '14px',
    24: '24px'
  },
  radii: {
    3: '3px',
    4: '4px',
    14: '14px',
    29: '29px'
  },
  space: {
    0: 0,
    4: 4,
    8: 8,
    16: 16,
    18: 18,
    24: 24,
    32: 32
  },
  shadows: {
    1: 'inset 0px -1px 0px #D6DADB',
    2: '0 1px 4px #E0E2E4',
    3: '0 2px 4px rgba(55, 88, 123, 0.16), 0 2px 4px rgba(0, 0, 0, 0.06)',
    4: '0 1px 4px rgba(54, 65, 76, .15)'
  },
  borders: {
    filter: '1px solid #D6DADB',
    filterItemDefault: '1px solid transparent',
    filterItemActive: '1px solid #000',
    input: '1px solid #D6DADB',
    inputFocus: '1px solid #2B7CEE',
    status: '1px solid #D9D9D9'
  }
}

export const sortingOrder = {
  defaultValue: [
    'desc',
    'asc'
  ],
  direction () {
    return this.defaultValue
  }
}

export const getAssemblyStatusNames = (status: AssemblyStatus) => {
  const statuses = {
    IN_REVIEW: 'In Review',
    REVIEW_FINISHED: 'Finished',
    ANY: 'Any'
  }

  return statuses[status]
}

export const getReviewStatusNames = (status: ReviewStatus) => {
  const statuses = {
    ANY: 'Any',
    DRAFT: 'Draft',
    SOLVED: 'Solved',
    SIMULATION_REQUESTED: 'Simulation Requested',
    SIMULATION_POSITIVE: 'Simulation Positive',
    SIMULATION_NEGATIVE: 'Simulation Negative',
  }

  return statuses[status]
}

export const assemblyStatusFilters = [
  {
    label: getAssemblyStatusNames(ANY),
    value: ANY
  },
  {
    label: getAssemblyStatusNames(IN_REVIEW),
    value: IN_REVIEW
  },
  {
    label: getAssemblyStatusNames(REVIEW_FINISHED),
    value: REVIEW_FINISHED
  }
]

export const reviewStatusFilters = [
  {
    label: getReviewStatusNames(ANY),
    value: ANY
  },
  {
    label: getReviewStatusNames(DRAFT),
    value: DRAFT
  },
  {
    label: getReviewStatusNames(SOLVED),
    value: SOLVED
  },
  {
    label: getReviewStatusNames(SIMULATION_REQUESTED),
    value: SIMULATION_REQUESTED
  },
  {
    label: getReviewStatusNames(SIMULATION_POSITIVE),
    value: SIMULATION_POSITIVE
  },
  {
    label: getReviewStatusNames(SIMULATION_NEGATIVE),
    value: SIMULATION_NEGATIVE
  }
]


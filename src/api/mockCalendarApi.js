import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const companies = [
  {
    id: "1",
    name: "Google",
    linkHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
    countries: ['USA', 'Belgium', 'Spain', 'New Zeland', 'Australia'],
    length: "5:08",
    category: "JavaScript"
  },
  {
    id: "2",
    name: "Microsoft",
    linkHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
     countries: ['India', 'Singapore', 'Japan'],
    length: "3:10",
    category: "Software Practices"
  },
  {
    id: "3",
    name: "Sovos",
    linkHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
    countries: ['Argentina', 'Brazil'],
    length: "2:52",
    category: "Software Architecture"
  },
  {
    id: "4",
    name: "Convey",
    linkHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
    countries: ['Germany', 'Belgium', 'Poland'],
    length: "2:30",
    category: "Career"
  },
  {
    id: "5",
    name: "Ted",
    linkHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
    countries: [],
    length: "5:10",
    category: "HTML5"
  }
];


function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CalendarApi {
  static getAllCompanies() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], companies));
      }, delay);
    });
  }

  static getCountryReturns(id) {
      return new Promise((resolve, reject) => {
        let filtered = returns.filter(item => item.country == id);
      setTimeout(() => {
        resolve(Object.assign([], filtered));
      }, delay);
    });
  }

/*  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and linkHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.linkHref = `http://www.pluralsight.com/courses/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.courseId == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }*/
}

export default CalendarApi;

const FilingSettingsViewModel = {
  SelectedCompany_Id: '',
  SelectedCountryCode: '',
  AvailableCompanies: [{
    Name: 'Convey', Guid: 'ee3332', Company_Id: 1
  }, {
    Name: 'Microsoft', Guid: 'asdasd', Company_Id: 2
  }],
  AvailableCountries: [{
    Name: 'Belgium', Code: 'BE', Country_Id: 1
  }, {
    Name: 'Argentina', Code: 'ARG', Country_Id: 2
  }],
  FilingPreferences: []
};


const returns = [{
        CountryCode: 'BE',
        Company_Id: 1,
        FromattedReportType: '',
        ReportType: '',
        SelectedFrequencyType: '',
        AvailableFrequencyTypes: [],
        EffectiveDate: '',
        ExpirationDate: '',
        FilingMethod: '',
        IsPartOfVatGroup: true
    },
    {
        returnType: 'Intrastat Arrival',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        startDate: '01/02/2010',
        endDate: '01/02/2015',
        eFile: false,
        country: 'Belgium',
        company: 'Disco',
        partOfVatGroup: true
    },
    {
        returnType: 'ESL Return',
        link: 'http://google.com.ar',
        frequency: 'Annually',
        startDate: '01/02/2015',
        endDate: '01/02/2016',
        eFile: true,
        partOfVatGroup: true,
        country: 'Belgium',
        company: 'Disco'
    },
    {
        returnType: 'Rodrigo',
        link: 'http://lagaceta.com.ar',
        frequency: 'Monthly',
        startDate: '02/07/2010',
        endDate: '02/07/2015',
        eFile: false,
        partOfVatGroup: false,
        country: 'Portugal',
        company: 'Disco'
    }];
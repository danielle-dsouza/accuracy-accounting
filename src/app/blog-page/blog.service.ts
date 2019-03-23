import { Injectable, EventEmitter } from "@angular/core";
import { Blog } from "./blog.model";

@Injectable()
export class BlogService {
  blogSelected = new EventEmitter<Blog>();

  private blogs: Blog[] = [
    new Blog(
      "Americans Missing Out on Tax Refunds",
      "Ruth Jenkins",
      "March 16, 2019",
      "../../assets/images/city-scape.jpg",
      "Do you own a business in America? Actually, scratch that - do you LIVE in America? Recent reports by the IRS indicate that over a million American taxpayers are missing out on valuable tax refunds. Are you one of them?",
      "The Internal Revenue Service (IRS) is the official revenue service of the American federal government. Their March 2019 numbers state that unclaimed tax refunds from 2015 are worth nearly 1.5 billion USD. To claim these taxes, taxpayers must file a 2015 Tax Return paper by April 15, 2019 (April 17, 2019 Massachusetts and Maine dwellers!).",
      "More news from the IRS: Democrat House Representatives, Sean Casten and Lauren Underwood, just introduced The Taxpayer Extension Act. This act proposes an extension to the 2018 Federal Tax Return deadline from April 15, 2019 to May 20, 2019. The additional 35 days will help both taxpayers and the IRS, themselves, which is warrented due to recent tax reforms and the government shutdown."
    ),
    new Blog(
      "Accuracy Launches New Online Service",
      "Leo Richards",
      "Februart 27, 1019",
      "../../assets/images/online-data.jpg",
      "Accuracy Accounting Firm has officially lauched the new online consultation service. For a limited time, Accuracy is offering free consultations for current clients, and your feedback regarding the system would be greatly appreciated.",
      "Accuracy believes that improving online services will make our business more efficient and convenient for you, as a client. The new service features better quality video and implements modern technology to allow for more advanced report analysis. There have been no changes regarding the policies and terms of conditions for use, but feel free to contact Accuracy if you have any questions, none-the-less.",
      "Free consultations for current clients are available until March 8, 2019. First-time consultations are still free for new clients."
    ),
    new Blog(
      "AAF Fund Raises $136,000!",
      "Jeremy Feldings",
      "February 18, 2019",
      "../../assets/images/school-kids.jpg",
      "Last year, the AAF Fund partnered with the Let'sLearn campagin to provide schools across the globe with better facilities. We're proud to say that, as of Februrary 2, 2019, we've raised over $136,000!",
      "Let'sLearn is a new organization with the aim of helping children recieve better education. The AAF Fun became an official sponser in January of 2018. Since then, AAF has initiated charity events across North America including marathons, friendly sport matches, and concerts. Over 100 North American schools have contributed to the events through raising awareness and volunteering, and we would like to formally thank each and every one of them. In addition, the AAF Fund is greatly appreciative of all who participated and/or donated. Your generousity will help thousands of children.",
      "100% of the proceeds are given to the Let'sLearn campaign. The money goes towards uniforms, school stationary, and sanitary washrooms."
    ),
    new Blog(
      "Hello Accuracy 2019!",
      "Lanxin Jackson",
      "January 5, 2019",
      "../../assets/images/new-york.jpg",
      "The 2018 global expansion was our biggest project, and, thanks to your support, it went off without a hitch. Accuracy is now a competitive enterprise in both Canada and America, and our client list has increased by 52%! But, we can still do better! So far, 2019 is set up to be a huge year of technological improvements, new services, and new locations across the continenet - all to help you build a more financially stable enterprise!",
      "So - Hello! Drumroll, please! It's time to introduce ... the new Accuracy!",
      "This year, the Canadian and American branches are gearing up to provide more online resources. An improved online consultation service has been in the works for a couple months now, and we're proud to set a launch date - February 27, 2019! All features of the old system will remain, including the online webCam service, and analysis of official reports - but now that analysis is going to become a lot more advanced! We'll be able to discuss live statistics, create reports one-on-one, and so much more. We can't wait to show you what we've been working on!"
    )
  ];

  getAllBlogs() {
    return this.blogs.slice();
  }

  getBlog(index: number) {
    return this.blogs.slice()[index];
  }
}

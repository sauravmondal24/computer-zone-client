import React from 'react';

const Blog = () => {
	return (
		<div className="md:container md:mx-auto py-20">
			<h2 className="text-4xl text-center text-warning font-bold pb-10">
				BLOG PAGE
			</h2>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						What are the different ways to manage a state in a React
						application?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-black">
					<p className="text-xl">
						<strong>The Four Kinds of React State to Manage</strong>
						<ul>
							<li>Local state</li>
							<li>Global state</li>
							<li>Server state</li>
							<li>Server state</li>
						</ul>
						<br />
						<strong>Local (UI) state –</strong>
						Local state is data we manage in one or another component. Local
						state is most often managed in React using the useState hook. For
						example, local state would be needed to show or hide a modal
						component or to track values for a form component, such as form
						submission, when the form is disabled and the values of a form’s
						inputs.
						<br />
						<strong>Global (UI) state –</strong>
						Global state is data we manage across multiple components. Global
						state is necessary when we want to get and update data anywhere in
						our app, or in multiple components at least. A common example of
						global state is authenticated user state. If a user is logged into
						our app, it is necessary to get and change their data throughout our
						application. Sometimes state we think should be local might become
						global.
						<br />
						<strong>Server state – </strong>
						Data that comes from an external server that must be integrated with
						our UI state. Server state is a simple concept, but can be hard to
						manage alongside all of our local and global UI state. There are
						several pieces of state that must be managed every time you fetch or
						update data from an external server, including loading and error
						state. Fortunately there are tools such as SWR and React Query that
						make managing server state much easier.
						<br />
						<strong>URL state –</strong>
						Data that exists on our URLs, including the pathname and query
						parameters. URL state is often missing as a category of state, but
						it is an important one. In many cases, a lot of major parts of our
						application rely upon accessing URL state. Try to imagine building a
						blog without being able to fetch a post based off of its slug or id
						that is located in the URL! There are undoubtedly more pieces of
						state that we could identify, but these are the major categories
						worth focusing on for most applications you build.
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						How does prototypical inheritance work?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-black">
					<p className="text-xl">
						The Prototypal Inheritance is a feature in javascript used to add
						methods and properties in objects. It is a method by which an object
						can inherit the properties and methods of another object.
						Traditionally, in order to get and set the [[Prototype]] of an
						object, we use Object. getPrototypeOf and Object
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">
						What is a unit test? Why should we write unit tests?
					</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-black">
					<p className="text-xl">
						The main objective of unit testing is to isolate written code to
						test and determine if it works as intended. Unit testing is an
						important step in the development process, because if done
						correctly, it can help detect early flaws in code which may be more
						difficult to find in later testing stages.
					</p>
				</div>
			</div>
			<div className="collapse my-2">
				<input type="checkbox" className="peer" />
				<div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
					<h2 className="text-2xl font-bold">React vs. Angular vs. Vue?</h2>
				</div>
				<div className="collapse-content bg-primary text-primary-content peer-checked:bg-gray-300 peer-checked:text-black">
					<p className="text-xl">
						<strong className="text-4xl">React</strong>
						<br />
						React doesn’t enforce a specific project structure, and as you can
						see from the official “Hello World” example below, you can start
						using React with just a few lines of code. ReactDOM.render(
						<h1>Hello, world!</h1>, document.getElementById('root') ); React can
						be used as a UI library to render elements, without enforcing a
						specific project structure, and that’s why it’s not strictly a
						framework. React Elements are the smallest building blocks of React
						apps. They are more powerful than DOM elements because the React DOM
						makes sure to update them efficiently whenever something changes.
						Components are larger building blocks that define independent and
						reusable pieces to be used throughout the application. They accept
						inputs called props and produce elements that are then displayed to
						the user. React is based on JavaScript, but it’s mostly combined
						with JSX (JavaScript XML), a syntax extension that allows you to
						create elements that contain HTML and JavaScript at the same time.
						Anything you create with JSX could also be created with the React
						JavaScript API, but most developers prefer JSX because it’s more
						intuitive.
						<br />
						<strong className="text-4xl">Vue</strong>
						<br />
						The Vue.js core library focuses on the View layer only. It’s called
						a progressive framework because you can extend its functionality
						with official and third-party packages, such as Vue Router or Vuex,
						to turn it into an actual framework. Although Vue is not strictly
						associated with the MVVM (Model-View-ViewModel) pattern, its design
						was partly inspired by it. With Vue, you’ll be working mostly on the
						ViewModel layer, to make sure that the application data is processed
						in a way that allows the framework to render an up-to-date View.
						Vue’s templating syntax lets you create View components, and it
						combines familiar HTML with special directives and features. This
						templating syntax is preferred, even though raw JavaScript and JSX
						are also supported. Components in Vue are small, self-contained, and
						can be reused throughout the application. Single File Components
						(SFCs) with the .vue extension contain HTML, CSS, and JavaScript so
						that all relevant code resides in one file. SFCs are the recommended
						way to organize code in Vue.js projects, especially larger ones.
						Tools such as Webpack or Browserify are required to transpile SFCs
						into working JavaScript code.
						<br />
						<strong className="text-4xl">Angular</strong>
						<br />
						In this article, I’m discussing Angular 2, and not the first version
						of the framework which is now known as AngularJS. AngularJS, the
						original framework, is an MVC (Model-View-Controller)) framework.
						But in Angular 2, there’s no strict association with MV*-patterns as
						it is also component-based. Projects in Angular are structured into
						Modules, Components, and Services. Each Angular application has at
						least one root component and one root module. Each component in
						Angular contains a Template, a Class that defines the application
						logic, and MetaData (Decorators). The metadata for a component tells
						Angular where to find the building blocks that it needs to create
						and present its view. Angular templates are written in HTML but can
						also include Angular template syntax with special directives to
						output reactive data and render multiple elements, among other
						things. Services in Angular are used by Components to delegate
						business-logic tasks such as fetching data or validating input. They
						are a distinct part of Angular applications. While Angular doesn’t
						enforce their use, it’s highly suggested to structure apps as a set
						of distinct services that can be reused. Angular is built in
						TypeScript, so its use is recommended to get the most seamless
						experience, but plain JavaScript is also supported.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Blog;

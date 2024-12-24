export default function ContactPage() {
  return (
    <div className="font-inter text-sm sm:text-base">
      <h2 className="font-hedvig-letters-serif text-2xl sm:text-3xl mb-4 sm:mb-6">Get in Touch</h2>
      <p className="mb-4">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out!
      </p>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Email</h3>
        <a href="mailto:hello@shashwatdubey.com" className="underline">hello@shashwatdubey.com</a>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">Social</h3>
        <ul>
          <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a></li>
          <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="underline">LinkedIn</a></li>
          <li><a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="underline">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}

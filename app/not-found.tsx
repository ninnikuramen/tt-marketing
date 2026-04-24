import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="container-editorial py-32 text-center max-w-xl mx-auto">
      <Image
        src="/logo-mark.svg"
        alt=""
        width={80}
        height={80}
        className="mx-auto mb-8 opacity-40"
      />
      <p className="font-display text-display-2xl font-bold text-logo-coral mb-4 leading-none">
        404
      </p>
      <h1 className="font-display text-display-md font-bold text-indigo-9 mb-6">
        That page doesn't exist.
      </h1>
      <p className="text-lg text-surface-6 mb-10 leading-relaxed">
        Either the URL is wrong, or we moved something and didn't tell you. Either way, let's
        get you somewhere useful.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/blog" className="btn-secondary">
          Read the blog
        </Link>
      </div>
    </div>
  );
}

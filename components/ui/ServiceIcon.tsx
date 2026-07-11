type ServiceIconProps = {
  slug: string;
  className?: string;
};

export function ServiceIcon({ slug, className }: ServiceIconProps) {
  const iconClass = className ?? "h-7 w-7";

  switch (slug) {
    case "su-kacagi-tespiti":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path d="M12 3c-4 5-7 8-7 11a7 7 0 1014 0c0-3-3-6-7-11z" />
          <circle cx="12" cy="14" r="2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tikaniklik-acma":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path d="M4 14h16M4 14c0-3 2-5 5-5h6c3 0 5 2 5 5M8 14v4M16 14v4" />
          <path d="M10 8V6M14 8V6" strokeLinecap="round" />
        </svg>
      );
    case "gomme-rezervuar":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <rect x="7" y="8" width="10" height="6" rx="1" />
          <path d="M12 14v3" />
        </svg>
      );
    case "tesisat-arizalari":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path d="M14 4l6 6-8 8H6v-6l8-8z" />
          <path d="M12 6l6 6" />
        </svg>
      );
    case "petek-bakimi":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <rect x="3" y="6" width="18" height="12" rx="2" />
          <path d="M7 6V4M12 6V4M17 6V4M7 12h10M7 16h10" />
        </svg>
      );
    case "acil-servis":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" strokeLinecap="round" />
        </svg>
      );
    case "kombi-bakim-onarim":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M9 8h6M9 12h6M9 16h4" />
          <path d="M12 21v-2" strokeLinecap="round" />
        </svg>
      );
    case "su-tesisati":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path d="M4 12h8M12 12l4-4v8l-4-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 3c-2 3-4 5-4 7a4 4 0 108 0c0-2-2-4-4-7z" />
        </svg>
      );
    case "dogalgaz-tesisati":
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <path d="M12 3c-3 4-5 7-5 10a5 5 0 1010 0c0-3-2-6-5-10z" />
          <path d="M8 14h8M10 17h4" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg
          className={iconClass}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

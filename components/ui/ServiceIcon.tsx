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

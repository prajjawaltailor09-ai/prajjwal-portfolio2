import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { title?: string };

function Svg({ title, ...props }: IconProps) {
  return (
    <svg
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {props.children}
    </svg>
  );
}

export function IconSparkles(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2z" />
      <path d="M19 12l.8 2.8L22 16l-2.2.7L19 19l-.7-2.3L16 16l2.3-.7L19 12z" />
      <path d="M4.5 13l.7 2.4L7.5 16l-2.3.7L4.5 19l-.7-2.3L1.5 16l2.3-.6L4.5 13z" />
    </Svg>
  );
}

export function IconLayout(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M8 4v16" />
      <path d="M3 10h18" />
    </Svg>
  );
}

export function IconPenTool(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 19l7-7 2 2-7 7H12v-2z" />
      <path d="M18 7l-1.5-1.5a2.1 2.1 0 0 0-3 0L6 13v3h3l7.5-7.5a2.1 2.1 0 0 0 0-3z" />
    </Svg>
  );
}

export function IconRocket(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 13c0 6 6 6 6 6s6 0 6-6c0-5 3-8 3-8s-3 0-8 3c0 0-3-3-8-3 0 0 3 3 3 8z" />
      <path d="M9 16l-1 4" />
      <path d="M15 16l1 4" />
      <path d="M10 11h4" />
    </Svg>
  );
}

export function IconRefresh(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M21 12a9 9 0 0 1-15 6" />
      <path d="M3 12a9 9 0 0 1 15-6" />
      <path d="M3 4v6h6" />
      <path d="M21 20v-6h-6" />
    </Svg>
  );
}

export function IconSearch(props: IconProps) {
  return (
    <Svg {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </Svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M12 2l3 7 7 .6-5.3 4.6L18.5 22 12 18.2 5.5 22l1.8-7.2L2 9.6 9 9l3-7z" />
    </Svg>
  );
}

export function IconArrowRight(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 12h14" />
      <path d="M13 5l7 7-7 7" />
    </Svg>
  );
}

export function IconMenu(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </Svg>
  );
}

export function IconX(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </Svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.7 19.7 0 0 1-8.6-3.1 19.3 19.3 0 0 1-6-6A19.7 19.7 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.5a16 16 0 0 0 6.4 6.4l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </Svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </Svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M20 11.6a8.4 8.4 0 0 1-12.2 7.5L4 20l.9-3.6A8.4 8.4 0 1 1 20 11.6z" />
      <path d="M9.3 8.6c.2-.4.4-.4.7-.4h.6c.2 0 .4 0 .5.4l.7 1.7c.1.3.1.6-.2.9l-.5.5c-.2.2-.1.5 0 .7.6 1.2 1.7 2.3 3 3 .2.1.5.2.7 0l.6-.6c.2-.2.6-.3.9-.2l1.7.7c.3.1.4.3.4.5v.7c0 .3 0 .5-.4.7-.5.3-1.7.8-3.1.5-1.6-.3-3.7-1.5-5.3-3.1-1.6-1.6-2.8-3.8-3.1-5.4-.3-1.4.2-2.6.5-3.1z" />
    </Svg>
  );
}

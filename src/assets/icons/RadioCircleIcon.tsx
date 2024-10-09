interface props {
    inner: string
    outer: string
}
export default function RadioCircle(props: props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.52002"
        y="0.495239"
        width="22.74"
        height="22.74"
        rx="11.37"
        fill={props.outer}
      />
      <g clip-path="url(#clip0_345_6365)">
        <path
          d="M11.8901 17.5502C15.0298 17.5502 17.5751 15.005 17.5751 11.8652C17.5751 8.7255 15.0298 6.18024 11.8901 6.18024C8.75034 6.18024 6.20508 8.7255 6.20508 11.8652C6.20508 15.005 8.75034 17.5502 11.8901 17.5502Z"
          fill={props.inner}
        />
      </g>
      <defs>
        <clipPath id="clip0_345_6365">
          <rect
            width="22.74"
            height="22.74"
            fill={props.inner}
            transform="translate(0.52002 0.495239)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

import colors from '@celo/react-components/styles/colors.v2'
import * as React from 'react'
import Svg, { G, Path } from 'svgs'

interface Props {
  width?: number
  height?: number
  color?: string
}

export default class Paste extends React.PureComponent<Props> {
  static defaultProps = {
    width: 28,
    height: 28,
    color: colors.gray5,
  }

  render() {
    return (
      <Svg
        height={this.props.height}
        width={this.props.width}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M10.5 21.5V22.5H11.5V21.5H10.5ZM21.5 10.5V11.5H22.5V10.5H21.5ZM6.5 16.5V14.5H4.5V16.5H6.5ZM6.5 12.5V10.5H4.5V12.5H6.5ZM6.5 10.5C6.5 9.76963 6.69484 9.08781 7.0347 8.50041L5.30358 7.49879C4.79231 8.38244 4.5 9.4086 4.5 10.5H6.5ZM8.50041 7.0347C9.08781 6.69484 9.76963 6.5 10.5 6.5V4.5C9.4086 4.5 8.38244 4.79231 7.4988 5.30358L8.50041 7.0347ZM10.5 6.5H12.5V4.5H10.5V6.5ZM14.5 6.5H16.5V4.5H14.5V6.5ZM16.5 6.5C17.2304 6.5 17.9122 6.69484 18.4996 7.0347L19.5012 5.30358C18.6176 4.79231 17.5914 4.5 16.5 4.5V6.5ZM19.9653 8.50041C20.3052 9.08781 20.5 9.76963 20.5 10.5H22.5C22.5 9.4086 22.2077 8.38244 21.6964 7.4988L19.9653 8.50041ZM21.5 9.5H19.5V11.5H21.5V9.5ZM17.5 9.5H15.5V11.5H17.5V9.5ZM15.5 9.5C14.4086 9.5 13.3824 9.79231 12.4988 10.3036L13.5004 12.0347C14.0878 11.6948 14.7696 11.5 15.5 11.5V9.5ZM10.3036 12.4988C9.79231 13.3824 9.5 14.4086 9.5 15.5H11.5C11.5 14.7696 11.6948 14.0878 12.0347 13.5004L10.3036 12.4988ZM9.5 15.5V17.5H11.5V15.5H9.5ZM9.5 19.5V21.5H11.5V19.5H9.5ZM10.5 20.5C9.76963 20.5 9.08781 20.3052 8.50041 19.9653L7.49879 21.6964C8.38244 22.2077 9.4086 22.5 10.5 22.5V20.5ZM7.0347 18.4996C6.69484 17.9122 6.5 17.2304 6.5 16.5H4.5C4.5 17.5914 4.79231 18.6176 5.30358 19.5012L7.0347 18.4996Z"
          fill={this.props.color}
        />
        <Path
          d="M19.9645 25.0355L19.2574 24.3284L19.9645 25.0355ZM15.5 25.5H16.4289V27.5H15.5V25.5ZM11.5 15.5V21.5H9.5V15.5H11.5ZM21.5 11.5H15.5V9.5H21.5V11.5ZM25.5 16.4289V15.5H27.5V16.4289H25.5ZM19.2574 24.3284L24.3284 19.2574L25.7426 20.6716L20.6716 25.7426L19.2574 24.3284ZM27.5 16.4289C27.5 18.0202 26.8679 19.5464 25.7426 20.6716L24.3284 19.2574C25.0786 18.5072 25.5 17.4898 25.5 16.4289H27.5ZM21.5 9.5C24.8137 9.5 27.5 12.1863 27.5 15.5H25.5C25.5 13.2909 23.7091 11.5 21.5 11.5V9.5ZM9.5 15.5C9.5 12.1863 12.1863 9.5 15.5 9.5V11.5C13.2909 11.5 11.5 13.2909 11.5 15.5H9.5ZM16.4289 25.5C17.4898 25.5 18.5072 25.0786 19.2574 24.3284L20.6716 25.7426C19.5464 26.8679 18.0202 27.5 16.4289 27.5V25.5ZM15.5 27.5C12.1863 27.5 9.5 24.8137 9.5 21.5H11.5C11.5 23.7091 13.2909 25.5 15.5 25.5V27.5Z"
          fill={this.props.color}
        />
        <G mask="url(#mask0)">
          <Path
            d="M19 23.4505V22.25H17V23.4505H19ZM22.25 19H24.5V17H22.25V19ZM24.5 19C26.1569 19 27.5 17.6569 27.5 16H25.5C25.5 16.5523 25.0523 17 24.5 17V19ZM19 22.25C19 20.4551 20.4551 19 22.25 19V17C19.3505 17 17 19.3505 17 22.25H19ZM15.6961 27.4806C17.6172 27.0964 19 25.4096 19 23.4505H17C17 24.4562 16.2901 25.3222 15.3039 25.5194L15.6961 27.4806Z"
            fill={this.props.color}
          />
        </G>
      </Svg>
    )
  }
}

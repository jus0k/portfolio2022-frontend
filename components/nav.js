import React from "react"
import Link from "next/link"
import styled from "styled-components"

const S = {
  Header: styled.header`
    padding: 64px;
  `,
  Logo: styled.div`
    a {
      color: ${(props) => props.theme.colors.gray_900};
      font-size: 24px;
      font-weight: 900;
      line-height: 1;
      text-transform: uppercase;
    }
  `,
}

const Nav = () => {
  return (
    <S.Header>
      <S.Logo>
        <Link href="/">
          <a>Jusung Kim</a>
        </Link>
      </S.Logo>
    </S.Header>
  )
}

export default Nav

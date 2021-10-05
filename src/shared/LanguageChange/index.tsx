import { IconButton, Menu, MenuItem } from '@material-ui/core'
import React, { useState, MouseEvent } from 'react'
import { LanguageRounded } from '@material-ui/icons'

import { useRouter } from 'next/router'
import Link from 'next/link'
import {
  FlagBr,
  FlagEsp,
  FlagEua,
  FlagAle,
  FlagChi,
  FlagFra
} from '../FlagsCountry'

const ITEM_HEIGHT = 48

export default function LanguageChange(): JSX.Element {
  const { asPath } = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageRounded style={{ color: 'white' }} />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button'
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch'
          }
        }}
      >
        <Link href={asPath} locale="pt-BR">
          <MenuItem onClick={handleClose}>
            <FlagBr />
            PT-BR
          </MenuItem>
        </Link>

        <Link href={asPath} locale="en">
          <MenuItem onClick={handleClose}>
            <FlagEua />
            EN
          </MenuItem>
        </Link>
        <Link href={asPath} locale="es">
          <MenuItem onClick={handleClose}>
            <FlagEsp />
            ES
          </MenuItem>
        </Link>
        <Link href={asPath} locale="fr">
          <MenuItem onClick={handleClose}>
            <FlagFra />
            FR
          </MenuItem>
        </Link>
        <Link href={asPath} locale="de">
          <MenuItem onClick={handleClose}>
            <FlagAle />
            DE
          </MenuItem>
        </Link>
        <Link href={asPath} locale="zh">
          <MenuItem onClick={handleClose}>
            <FlagChi />
            CN
          </MenuItem>
        </Link>
      </Menu>
    </>
  )
}

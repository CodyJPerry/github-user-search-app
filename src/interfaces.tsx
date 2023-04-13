import { Dispatch, SetStateAction} from 'react';

export interface HeaderProps {
  isDarkMode: boolean
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface ToggleProps {
  isDarkMode: boolean,
  setDarkMode: Dispatch<SetStateAction<boolean>>
}

export interface SearchProps {
  searchInput: HTMLFormElement,
  updateUsername: Dispatch<SetStateAction<string>>,
  hasError: boolean
}

export interface ProfileCardProps {
  user: {
    login: string,
    name: string,
    bio: string,
    created_at: Date,
    public_repos: number,
    followers: number,
    location: string,
    blog: string,
    company: string,
    twitter_username: string,
    following: number, 
    avatar_url: string,
    url: string
  }
}
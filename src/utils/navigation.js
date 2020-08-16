const getNavigation = (userid) => {
  const links = [
    {
      title: "Contact us",
      link: "/contact us"
    },
    {
      title: "Creativity",
      link: "/creativity"
    },
    {
      title: "Blog",
      link: "/blog"
    },
    {
      title: "About me",
      link: "/about me"
    },
    {
      title: "Home",
      link: "/"
    },
  ]
  return links
}
export default getNavigation
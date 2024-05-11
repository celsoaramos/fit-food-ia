import Label from '../Atoms/Label'
import Link from 'next/link'

interface BreadcrumbProps {
  pageName: string
}
const Breadcrumb = ({ pageName }: BreadcrumbProps) => {
  return (
    <div className="px-5 flex flex-col">
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/home">
              <Label
                text="Home /"
                textSize="small"
                color="text-white"
                className="cursor-pointer"
              />
            </Link>
          </li>
          {pageName === 'Home' ? (
            ''
          ) : (
            <li className="text-primary">
              <Label text={pageName} textSize="small" color="text-white" />
            </li>
          )}
        </ol>
      </nav>
      <Label
        text={pageName}
        className="font-semibold"
        textSize="two"
        color="text-white"
      />
    </div>
  )
}

export default Breadcrumb

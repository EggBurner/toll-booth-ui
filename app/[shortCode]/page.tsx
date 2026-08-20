import { redirect } from 'next/navigation'

export default async function Page({
  params,
}: {
  params: Promise<{ shortCode: string }>
}) {
  const { shortCode } = await params
  redirect(`/redirect-request/${shortCode}`)
}
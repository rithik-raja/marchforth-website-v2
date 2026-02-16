'use client'

import { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { toast } from 'sonner'

import firestore from '@/lib/firebase'
import { Button } from '@/components/Button'
import { FadeIn } from '@/components/FadeIn'

type FormState = {
  name: string
  email: string
  company: string
  phone: string
  message: string
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  company: '',
  phone: '',
  message: '',
}

function TextInput({
  label,
  disabled,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        id={props.name}
        {...props}
        disabled={disabled}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition disabled:cursor-not-allowed disabled:opacity-60 group-first:rounded-t-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={props.name}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function TextArea({
  label,
  disabled,
  ...props
}: React.ComponentPropsWithoutRef<'textarea'> & { label: string }) {
  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <textarea
        id={props.name}
        {...props}
        disabled={disabled}
        placeholder=" "
        className="peer block min-h-36 w-full resize-y border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition disabled:cursor-not-allowed disabled:opacity-60 group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={props.name}
        className="pointer-events-none absolute top-8 left-6 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function validateForm(form: FormState) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const phoneRegex = /^[+]?[(]?[0-9\s().-]{7,}$/

  if (!form.name.trim()) {
    return 'Name is required.'
  }

  if (!form.email.trim()) {
    return 'Email is required.'
  }

  if (!emailRegex.test(form.email.trim())) {
    return 'Please enter a valid email address.'
  }

  if (!form.message.trim()) {
    return 'Message is required.'
  }

  if (form.phone.trim() && !phoneRegex.test(form.phone.trim())) {
    return 'Please enter a valid phone number.'
  }

  return null
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM)
  const [isSubmitting, setIsSubmitting] = useState(false)

  function onChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const validationError = validateForm(form)
    if (validationError) {
      toast.error(validationError)
      return
    }

    setIsSubmitting(true)

    try {
      await addDoc(collection(firestore, 'responses'), {
        ...form,
        createdAt: serverTimestamp(),
      })

      toast.success('Your message has been sent!')
      setForm(INITIAL_FORM)
    } catch {
      toast.error('We could not submit your message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <FadeIn className="lg:order-last">
      <form onSubmit={onSubmit} className={isSubmitting ? 'opacity-70' : undefined}>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Let's Talk
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput
            label="Name"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={onChange}
            disabled={isSubmitting}
          />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={onChange}
            disabled={isSubmitting}
          />
          <TextInput
            label="Company"
            type="text"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={onChange}
            disabled={isSubmitting}
          />
          <TextInput
            label="Phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={onChange}
            disabled={isSubmitting}
          />
          <TextArea
            label="Message"
            name="message"
            value={form.message}
            onChange={onChange}
            disabled={isSubmitting}
          />
        </div>
        <Button
          type="submit"
          className="mt-10 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Let’s work together'}
        </Button>
      </form>
    </FadeIn>
  )
}

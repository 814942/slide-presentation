import { Slide } from '@/components/Slide'
import { FlowDiagram, type FlowNode } from '@/components/diagrams/FlowDiagram'
import { Mic, FileText, ListChecks, GitBranch, Code, GitPullRequest, CheckCircle } from 'lucide-react'
import type { SlideMetadata } from '@/types/slide'

export const metadata: SlideMetadata = {
  id: '17',
  module: 'Development Lifecycle',
  title: 'El flujo completo end-to-end',
}

export default function LifecycleCompleteSlide() {
  const nodes: FlowNode[] = [
    { id: '1', label: 'Meeting', icon: Mic, color: 'cyan' },
    { id: '2', label: 'PRD', icon: FileText, color: 'yellow' },
    { id: '3', label: 'Jira', icon: ListChecks, color: 'blue' },
    { id: '4', label: 'Branch', icon: GitBranch, color: 'magenta' },
    { id: '5', label: 'Code', icon: Code, color: 'green' },
    { id: '6', label: 'PR', icon: GitPullRequest, color: 'orange' },
    { id: '7', label: 'Done', icon: CheckCircle, color: 'green' },
  ]

  return (
    <Slide module={metadata.module} title={metadata.title}>
      <div className="flex flex-col items-center gap-8">
        <FlowDiagram
          nodes={nodes}
          connections={[
            { from: '1', to: '2' },
            { from: '2', to: '3' },
            { from: '3', to: '4' },
            { from: '4', to: '5' },
            { from: '5', to: '6' },
            { from: '6', to: '7' },
          ]}
        />

        <div className="grid grid-cols-3 gap-4 text-center text-sm">
          <div className="rounded-lg border border-accent-cyan/30 bg-card p-3">
            <span className="block font-semibold text-accent-cyan">Pre-Dev</span>
            <span className="text-text-muted">Meeting → PRD → Jira</span>
          </div>
          <div className="rounded-lg border border-accent-green/30 bg-card p-3">
            <span className="block font-semibold text-accent-green">Dev</span>
            <span className="text-text-muted">SDD: Spec → Code</span>
          </div>
          <div className="rounded-lg border border-accent-orange/30 bg-card p-3">
            <span className="block font-semibold text-accent-orange">Post-Dev</span>
            <span className="text-text-muted">PR → Review → Merge</span>
          </div>
        </div>
      </div>
    </Slide>
  )
}
